export interface Topic {
  topicId: number
  topicName: string
  topicBody: string
  profileId: number
  postTimestamp: any
  categoryId: number
  category: Category
  profile: Profile
  replies: Reply[]
}

export interface Category {
  categoryId: number
  categoryName: string
  topics: Topic[]
}

export interface Profile {
  profileId: number
  profileName: string
  profileStreetaddress: string
  profileCity: string
  profileStateid: number
  profileZipcode: string
  profileAge: number
  profileHomephone: string
  profilePersonalphone: string
  profileEmail: string
  profileOccupation: string
  profileSpousename: string
  profileChildren: number
  profileDwellingid: number
  profileHasyard: number
  profileLandlordname: string
  profileLandlordphone: string
  profileOtherpetname: string
  profileOtherpetbreed: string
  profileOtherpetsex: string
  profileOtherpetage: number
  profileFamilyallergies: number
  profileResponsiblefordog: string
  profileAdoptionreason: string
  profileDogsleepat: string
  profileDogaggresive: string
  profileMedfordog: string
  profileNocaredog: string
  profileDwelling: any
  profileState: any
  favorites: Favorite[]
  replies: Reply[]
  topics: Topic[]
}

export interface Reply {
  replyId: number
  replyMessage: string
  replyTimestamp: any
  profileId: number
  topicId: number
  profile: Profile
  topic: Topic
}

export interface Favorite {
  favId:       number;
  dogId:       number;
  isAvailable: number;
  profileId:   number;
  profile:     Profile;
}
