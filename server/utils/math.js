var math = {};

math.diffInYearsFromToday = (dateString) => {
    var today = new Date();
    if(!dateString) return 0;
    var birthDate = new Date(dateString);
    var years = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        years--;
    }
    return years;
};

module.exports = math;