export interface IHashComparator {
    compare(params: IHashComparator.Params): IHashComparator.Result;
}

export namespace IHashComparator {
    export type Params = {
        data: any;
        hashedData: string;
    }

    export type Result = Promise<boolean>;
}
