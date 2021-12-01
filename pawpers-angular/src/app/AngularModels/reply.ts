export interface Main {
    $id:     string;
    $values: Reply[];
}

export interface Reply {
    $id:            string;
    replyId:        number;
    replyMessage:   string;
    replyTimestamp: null;
    profileId:      number;
    topicId:        number;
    profile:        null;
    topic:          null;
}
