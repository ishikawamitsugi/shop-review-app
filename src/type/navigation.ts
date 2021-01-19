import {Shop} from './shop';

export type RootStackPramList = {
    Main: undefined;
    Home: undefined;
    Shop: {shop: Shop};
    User: undefined;
    CreateReview: {shop: Shop};
}