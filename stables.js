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
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions. 
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- First day (Assignment 2) -------------------------//
// 1st Horse
let ponyta = {
    name: "Ponyta",
    nickname: "Ponyo",
    favoriteSnack: "biscuits 🍘",
    age: 2,
    monthlyRent: 300,
    locationInside: true,
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
    locationInside: false,
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
    locationInside: true,
    isFriendly: false,
    colour: "pink"
};

// 4th Horse
let muvmuv = {
    name: "Muvmuv",
    nickname: "Muv",
    favoriteSnack: "apples 🍎",
    age: 3,
    monthlyRent: 400,
    locationInside: true,
    isFriendly: true,
    colour: "orange"
};

// "horses" array variable
let horses = [ponyta, rapidash, lovely, muvmuv];

// Are the horses hungry or not?
ponyta.isHungry = false;
rapidash.isHungry = false;
lovely.isHungry = true;
muvmuv.isHungry = true;

// Variable that stores total number of stalls
let totalStalls = 4;

// Function that logs out how many stalls are available, given how many horses you have in your stable
function availableStalls (numberOfHorses) { 
    return totalStalls - numberOfHorses;
};

console.log(availableStalls(horses.length));

// Function that logs out how much will an individual horse owe if rent is paid late
function latePayment (horse) {
    console.log (horse.monthlyRent * 1.20);
};

latePayment (ponyta);

// Function that returns the nickname of a chosen horse
function getNickname (horse) {
    return horse.nickname;
};

console.log (getNickname (rapidash));