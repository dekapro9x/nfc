#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNNFCPassportReader, NSObject)

RCT_EXTERN_METHOD(readPassport:(NSString *)mrzKey
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end