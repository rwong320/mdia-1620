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