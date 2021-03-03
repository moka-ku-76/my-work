//
//  UIColor-Extension.swift
//  ChatApp
//
//  Created by 岡　誠道 on 2020/10/06.
//  Copyright © 2020 岡　誠道. All rights reserved.
//

import UIKit

extension UIColor{
    
    static func rgb(red: CGFloat, green: CGFloat, blue:CGFloat) -> UIColor {
        return self.init(red: red/255, green: green/255, blue: blue/255, alpha: 1)
    }
}
