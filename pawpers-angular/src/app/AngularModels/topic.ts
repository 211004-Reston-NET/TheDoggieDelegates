export interface Topic {
    $id:           string;
    topicId:       number;
    topicName:     string;
    topicBody:     string;
    profileId:     number;
    postTimestamp: null;
    categoryId:    number;
    category:      Category;
    profile:       Profile;
    replies:       TopicsClass;
}

export interface Category {
    $id:          string;
    categoryId:   number;
    categoryName: string;
    topics:       TopicsClass;
}

export interface TopicsClass {
    $id:     string;
    $values: Value[];
}

export interface Value {
    $ref: string;
}

export interface Profile {
    $id:                      string;
    profileId:                number;
    profileName:              string;
    profileStreetaddress:     string;
    profileCity:              string;
    profileStateid:           number;
    profileZipcode:           string;
    profileAge:               number;
    profileHomephone:         string;
    profilePersonalphone:     string;
    profileEmail:             string;
    profileOccupation:        string;
    profileSpousename:        string;
    profileChildren:          number;
    profileDwellingid:        number;
    profileHasyard:           number;
    profileLandlordname:      string;
    profileLandlordphone:     string;
    profileOtherpetname:      string;
    profileOtherpetbreed:     string;
    profileOtherpetsex:       string;
    profileOtherpetage:       number;
    profileFamilyallergies:   number;
    profileResponsiblefordog: string;
    profileAdoptionreason:    string;
    profileDogsleepat:        string;
    profileDogaggresive:      string;
    profileMedfordog:         string;
    profileNocaredog:         string;
    profileDwelling:          null;
    profileState:             null;
    favorites:                TopicsClass;
    replies:                  PurpleReplies;
    topics:                   TopicsClass;
}

export interface PurpleReplies {
    $id:     string;
    $values: PurpleValue[];
}

export interface PurpleValue {
    $id:            string;
    replyId:        number;
    replyMessage:   string;
    replyTimestamp: null;
    profileId:      number;
    topicId:        number;
    profile:        Value;
    topic:          Value;
}
