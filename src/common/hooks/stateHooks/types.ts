export type Foodlist = {
    id: number;
    userID: number; // FK
    title: string;
    recurringDay: string;
    recurringTime: string;
    currentFoodIdx: number;
    imgURL?: string;
};

export type User = {
    id: number;
    name: string;
};

export type Contributer = User & {
    role: string;
    ghURL: string;
    linkedinURL: string;
    profilePicURL?: string;
};

export type Food = {
    id: number;
    vendorID: number; // FK
    name: string;
    description?: string;
};

export type FoodlistFoods = {
    foodListID: number; // FK
    foodID: number; // FK
    quantity: number;
    index: number; // order of food in list
};

export enum PlayState {
    PLAY = 'play',
    PAUSE = 'pause',
    STOP = 'stop',
}

export type FoodResp = Omit<Food, 'id'> & Omit<FoodlistFoods, 'foodID' | 'foodListID'>;
