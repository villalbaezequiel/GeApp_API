// Seed minimo para ambientes de desarrollo / docker. Idempotente.
// Uso: npm run seed   (o: docker compose exec app npm run seed)
const { sequelize } = require('./models');
const User = require('./models/user');
const Citizen = require('./models/citizen');
const Config = require('./models/config');
const Election = require('./models/election');
const ScrutinyCategory = require('./models/scrutiny-category');
const ScrutinyParty = require('./models/scrutiny-party');
const VotingTable = require('./models/voting-table');
const Voter = require('./models/voter');

const ADMIN = { nationalId: 'admin', password: 'admin1234' };
const CITIZENS = [
    { nationalId: '2001', first: 'Ana', last: 'Fiscal', birthday: '1980-05-10' },
    { nationalId: '2002', first: 'Beto', last: 'Votante', birthday: '1975-01-20' },
    { nationalId: '2003', first: 'Carla', last: 'Votante', birthday: '1990-09-02' },
];

(async () => {
    try {
        await sequelize.sync();

        await Config.findOrCreate({ where: { code: 'DEFAULT_HELP_PHONE' }, defaults: { value: '+5412341234' } });

        let admin = await User.findOne({ where: { nationalId: ADMIN.nationalId } });
        if (!admin) {
            admin = new User();
            admin.nationalId = ADMIN.nationalId;
            admin.first = 'Admin';
            admin.last = 'Geapp';
            admin.role = 'ADMIN';
            admin.approved = true;
            admin.setPassword(ADMIN.password);
            await admin.save();
        }

        const citizens = [];
        for (const c of CITIZENS) {
            const [citizen] = await Citizen.findOrCreate({ where: { nationalId: c.nationalId }, defaults: c });
            citizens.push(citizen);
        }

        const [election, electionCreated] = await Election.findOrCreate({
            where: { name: 'Elección Demo', year: '2026' },
            defaults: { description: 'Datos de prueba', isActive: true },
        });
        if (electionCreated) {
            const category = await ScrutinyCategory.create({ name: 'Intendente', electionId: election.id });
            await ScrutinyParty.create({ name: 'Partido A', scrutinycategoryId: category.id });
            await ScrutinyParty.create({ name: 'Partido B', scrutinycategoryId: category.id });
        }

        const [table, tableCreated] = await VotingTable.findOrCreate({
            where: { table: '1', establishment: 'Escuela Demo' },
            defaults: { address: 'Calle 123', section: '1', circuit: '1', district: 'Demo', electionId: election.id },
        });
        if (tableCreated) {
            for (let i = 0; i < citizens.length; i++) {
                await Voter.create({
                    order: String(i + 1),
                    isOwner: i === 0, // 2001 es fiscal (owner) de la mesa
                    citizenId: citizens[i].id,
                    votingtableId: table.id,
                });
            }
        }

        console.log(`Seed OK. Admin: ${ADMIN.nationalId} / ${ADMIN.password}. Fiscal (owner de mesa): DNI 2001. Votantes: 2002, 2003.`);
        process.exit(0);
    } catch (e) {
        console.error('Seed failed:', e);
        process.exit(1);
    }
})();
