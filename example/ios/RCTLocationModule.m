//
//  RCTLocationModule.m
//  IncidentCo
//
//  Created by Manan Kansara on 06/04/21.
//  Copyright © 2021 Facebook. All rights reserved.
//

// RCTLocationModule.m
#import "RCTLocationModule.h"

@implementation RCTLocationModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(testModule:(NSString *)string )
{
  NSLog(@"The string '%@' comes from JavaScript! ", string);
}

@end
