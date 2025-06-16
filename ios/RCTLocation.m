//
//  RCTLocation.m
//  IncidentCo
//
//  Created by Manan Kansara on 07/04/21.
//  Copyright © 2021 Facebook. All rights reserved.
//

#import "RCTLocation.h"
#import <React/RCTLog.h>
#import <CoreLocation/CoreLocation.h>

@implementation RCTLocation

RCT_EXPORT_MODULE(Location);

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"EventReminder"];
}

RCT_EXPORT_METHOD(addEvent:(NSString *)name) {
  RCTLogInfo(@"Welcome, %@", name);
}

RCT_EXPORT_METHOD(checkLocationAlwaysPermission:(NSString *)title
                  location:(NSString *)location
                  successCallback: (RCTResponseSenderBlock)successCallback)
{
    switch ([CLLocationManager authorizationStatus]) {
        case kCLAuthorizationStatusNotDetermined:
            return successCallback(@[@"RNPermissionStatusNotDetermined"]);
        case kCLAuthorizationStatusRestricted:
          return successCallback(@[@"RNPermissionStatusRestricted"]);
        case kCLAuthorizationStatusAuthorizedWhenInUse:
          return successCallback(@[@"RNPermissionStatusWhenInUse"]);
        case kCLAuthorizationStatusDenied:
          return successCallback(@[@"RNPermissionStatusDenied"]);
        case kCLAuthorizationStatusAuthorizedAlways:
          return successCallback(@[@"RNPermissionStatusAuthorized"]);
      }
}

@end
