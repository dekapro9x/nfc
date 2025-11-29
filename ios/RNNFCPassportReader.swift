//
//  RNNFCPassportReader.swift
//  nfc
//
//  Created by Trần Xuân Nam on 29/11/25.
//

import Foundation

@objc(RNNFCPassportReader)
class RNNFCPassportReader: NSObject {
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  @objc(readPassport:resolver:rejecter:)
  func readPassport(_ mrzKey: String,
                    resolver resolve: @escaping RCTPromiseResolveBlock,
                    rejecter reject: @escaping RCTPromiseRejectBlock) {
    //BeoTranDev: => call result by lib NFC IOS
    let result: [String: Any] = [
      "documentNumber": "TEST123456",
      "firstName": "Nam",
      "lastName": "Tran",
      "nationality": "VNM",
      "dateOfBirth": "900101",
      "expiryDate": "300101"
    ]
    resolve(result)
  }
}

// import Foundation
// import NFCPassportReader  

// @objc(RNNFCPassportReader)
// class RNNFCPassportReader: NSObject {

//   private let passportReader = PassportReader()

//   @objc
//   static func requiresMainQueueSetup() -> Bool {
//     return true
//   }

//   @objc(readPassport:resolver:rejecter:)
//   func readPassport(_ mrzKey: String,
//                     resolver resolve: @escaping RCTPromiseResolveBlock,
//                     rejecter reject: @escaping RCTPromiseRejectBlock) {

//     passportReader.readPassport(
//       mrzKey: mrzKey,
//       tags: [.COM, .DG1, .DG2]
//     ) { [weak self] error in
//       if let error = error {
//         reject("READ_ERROR", error.localizedDescription, error)
//         return
//       }

//       guard let model = self?.passportReader.passport else {
//         reject("NO_PASSPORT", "No passport data found", nil)
//         return
//       }

//       let result: [String: Any] = [
//         "documentNumber": model.documentNumber,
//         "firstName":      model.firstName,
//         "lastName":       model.lastName,
//         "nationality":    model.nationality,
//         "dateOfBirth":    model.dateOfBirth,
//         "expiryDate":     model.expiryDate
//       ]

//       resolve(result)
//     }
//   }
// }
