var Options;
(function (Options) {
    Options["Rock"] = "rock";
    Options["Paper"] = "paper";
    Options["Scissors"] = "scissors";
})(Options || (Options = {}));
var getComputerChoice = function () {
    var values = Object.values(Options);
    return values[Math.floor(Math.random() * values.length)];
};
console.log(getComputerChoice());
