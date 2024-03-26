export type Foodlist = {
    id: number;
    title: string;
    recurringDay: string;
    recurringTime: string;
    currentFoodIdx: number;
    status: PlayState;
    category: string;
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
    name: string;
    description?: string;
    category: string;
    index: number;
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
}

export type FoodResp = Omit<Food, 'id'> & Omit<FoodlistFoods, 'foodID' | 'foodListID'>;

export type Session = {
    fuxSplash: boolean;
};

export type FoodlistInfo = {
    foodlist: Foodlist;
    foods: Food[];
};
