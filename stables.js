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

//------------------------- Setting up shop (Assignment 1) -------------------------//
// 1st Horse
let ponytaMonthlyRent = 300;
let ponyta = {
    name: "Ponyta",
    age: 2,
    favoriteSnack: "biscuits 🍘",
    lateFee: ponytaMonthlyRent*1.20, // monthly rate + 20%
};

// 2nd Horse
let rapidashMonthlyRent = 500;
let rapidash = {
    name: "Rapidash",
    age: 5,
    favoriteSnack: "carrots 🥕",
    lateFee: rapidashMonthlyRent*1.20, // monthly rate + 20%
};

// 3rd Horse
let lovelyMonthlyRent = 800;
let lovely = {
    name: "Lovely",
    age: 6,
    favoriteSnack: "milk cookies 🍪",
    lateFee: lovelyMonthlyRent*1.20, // monthly rate + 20%
};

// Variables
let stableName = "Whimsical House Stable"
let visitorsMessage = "Welcome to " + stableName + "!"
let lateFeeMessage = "The monthly payment for " + ponyta.name + " is late and the total amount owing with the late fee included is $" + ponyta.lateFee

console.log (visitorsMessage);
console.log (lateFeeMessage);

// MAKING CHANGES TO THIS FILE FOR NEW BRANCH
// makvidnsvilsne