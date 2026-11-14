// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
//------------------------- First day (Assignment 2) -------------------------//
// 1st Horse
let ponyta = {
    name: "Ponyta",
    nickname: "Ponyo",
    favoriteSnack: "biscuits 🍘",
    age: 2,
    monthlyRent: 300,
    isHorseLocationInside: true,
    isFriendly: true,
    colour: "white"
};

// 2nd Horse
let rapidash = {
    name: "Rapidash",
    nickname: "Horsey",
    favoriteSnack: "carrots 🥕",
    age: 5,
    monthlyRent: 500,
    isHorseLocationInside: false,
    isFriendly: false,
    colour: "red"
};

// 3rd Horse
let lovely = {
    name: "Lovely",
    nickname: "Love",
    favoriteSnack: "milk cookies 🍪",
    age: 6,
    monthlyRent: 800,
    isHorseLocationInside: true,
    isFriendly: false,
    colour: "pink"
};

// "horses" array variable
let horses = [ponyta, rapidash, lovely];

// 4th Horse added
let muvmuv = {
    name: "Muvmuv",
    nickname: "Muv",
    favoriteSnack: "apples 🍎",
    age: 3,
    monthlyRent: 400,
    isHorseLocationInside: true,
    isFriendly: true,
    colour: "orange"
};

horses.push (muvmuv);

// Are the horses hungry or not?
ponyta.isHungry = false;
rapidash.isHungry = false;
lovely.isHungry = true;
muvmuv.isHungry = true;

// Variable that stores total number of stalls
let totalStalls = 20;

// Function that logs out how many stalls are available, given how many horses you have in your stable
function availableStalls (stalls, occupiedStalls) { 
    console.log (stalls - occupiedStalls);
};
availableStalls(25, 13);
// room for 12 horses
availableStalls(8, horses.length);
// room for 4 horses
availableStalls(totalStalls, horses.length);
// room for 16 horses

// Function that logs out how much will an individual horse owe if rent is paid late
function latePayment (horse, lateFee) {
    console.log (horse.monthlyRent * lateFee);
};

latePayment (muvmuv, 1.20);

// Function that returns the nickname of a chosen horse
function getNickname (horse) {
    return horse.nickname;
};

console.log (getNickname (rapidash));

//------------------------- Day to day operations (Project) -------------------------//

// Loop that checks to find out if a certain horse likes a particular treat. If the horse does not like the treat, log out their disatisfaction and check the next horse. Exit the loop when you find the horse that likes the treat.
let particularTreat = "apples 🍎";

for (const horse of horses) {
    if (horse.favoriteSnack == particularTreat) {
        console.log(horse.name + " likes " + particularTreat + "!");
    }
    else {console.log(horse.name + " does not like " + particularTreat + ".");
    }
};

// Create a function references one of your unique horse properties. It should contain a conditional or a loop. Invoke it for each horse.
function checkFriendliness (horse) {
    if (horse.isFriendly == true) {
        console.log(horse.name + " is friendly.");
    }
    else {console.log(horse.name + " is not friendly.");
    }
};

checkFriendliness(ponyta);
checkFriendliness(rapidash);
checkFriendliness(lovely);
checkFriendliness(muvmuv);

// Create and invoke a function that moves any number horses of your choice outside. It should log out statement indicating the horses have been moved to spend time in the sun. 
function moveOutside (horsesToMove) {
    for (const horse of horsesToMove) {
        horse.isHorseLocationInside = false;
        console.log(horse.name + " has been moved outside to spend time in the sun!");
    }
};
// (The function should be able to move a single horse, or multiple horses, depending on the parameters specified)
moveOutside([ponyta]);
moveOutside([rapidash, lovely]);

// Create and invoke a function that feeds your horses. If the horse is outside, it should call them in, and then all horses should be fed a treat. Log the activity of the horses.


// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.
// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

