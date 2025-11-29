import { NativeModules } from 'react-native';

const { RNNFCPassportReader } = NativeModules;

export type PassportData = {
    documentNumber: string;
    firstName: string;
    lastName: string;
    nationality: string;
    dateOfBirth: string;
    expiryDate: string;
};

export function readPassport(mrzKey: string): Promise<PassportData> {
    return RNNFCPassportReader.readPassport(mrzKey);
}
