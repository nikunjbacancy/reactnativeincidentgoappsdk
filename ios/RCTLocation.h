//
//  RCTLocation.h
//  IncidentCo
//
//  Created by Manan Kansara on 07/04/21.
//  Copyright © 2021 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTEventEmitter.h>

@interface RCTLocation : RCTEventEmitter <RCTBridgeModule, CLLocationManagerDelegate>{
  CLLocationManager *locationManager;
}
@end
