export interface Main {
    $id:     string;
    $values: Topic[];
}


export interface Topic {
    $id:           string;
    topicId:       number;
    topicName:     string;
    topicBody:     string;
    profileId:     number;
    postTimestamp: null;
    categoryId:    number;
    category:      null;
    profile:       null;
    replies:       Main;
    show:         boolean;
}

