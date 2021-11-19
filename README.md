# Pawpers
## Overview
Pawpers is a pre-adoption service that matches propspective dog owners with local animal shelters, utilizing the pre-screen profile and the dog breed information API. We aim to simplify the adoption process by pre-screening new owners before they step into the shelter.

## Tables
- Profile, for storing the user's pre-screen profile
- Favorites, join table for adopter "favorite" pets
- Forum, for storing dicussion topics
- Categories, join table for discussion categories
- Replies, for storing discussion replies

## User Stories
- Adopter should be able to register for a new account
- Adopter should be able to fill out a pre-screen profile
- Adopter should be able to print a copy of their profile to bring into the shelter with them
- Adopter should be able to view a list of available potential matches based on their profile
- Adopter should be able to see the nearest shelters, based on a mile radius and geolocation data
- Adopter should be able to "favorite" certain dogs and reference them at a later date
- Unregistered users should be able to view shelters and animals by locations and breed
- General forum for registered adopters to share pet and shelter information and recommend pets to other users

## Scope Goals
- One click email button that sends pre-screen profile to the selected shelter with the adopters preferred animal(s)

## Tech Stack
- C#/Entity Framwork
- Asp.net WebAPI
- SQL
- Javascript/Typescript/Angular
- Azure Cloud Services
- Github VC/CI/CD
- Xunit/Moq
- Serilog
- Petfinder API
- RescureGroups API
- The Dog API
