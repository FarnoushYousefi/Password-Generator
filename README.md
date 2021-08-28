## Password Generator
### Description
This project solves the security concern of weak passwords. Given that a user needs a new, secured password, they will be promted to determine certain character types required for the password and then a new random password will be generated.

The new password implements greater security to sensitive data and saves time for users.

The criteria that the password is able to meet are:

    the password is between 8 - 128 characters long, AND

    the password must have at least one of the following character types:
    *lowercase characters
    *uppercasse characters
    *special characters
    *numeric characters 

## The final product, deploy link
https://farnoushyousefi.github.io/Password-Generator/

## GitHub link
https://github.com/FarnoushYousefi/friendly-parakeet

## How to Approach this Project
I implement this project mostly though the recursive function.
I have created the getRandomLower(), getRandomUpper(), getRandomNumber(), getRandomSymbol() to generate the corresponding elements, and call them in the loopThrough function
