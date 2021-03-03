//
//  ViewController.swift
//  BMIcalc
//
//  Created by 岡　誠道 on 2020/10/02.
//  Copyright © 2020 岡　誠道. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    
    @IBOutlet weak var height: UITextField!
    
    @IBOutlet weak var weight: UITextField!
    
    @IBOutlet weak var BMItext: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        self.height.keyboardType = UIKeyboardType.decimalPad
        self.weight.keyboardType = UIKeyboardType.decimalPad
    }
    
    @IBAction func Button(_ sender: Any) {
        var dheight = Double(height.text!)
        dheight = dheight!/100
        let dweight = Double(weight.text!)
        let dheight2 = dheight! * dheight!
        let bmi = String(dweight!/dheight2)
        
        BMItext.text = ("あなたのBMIは" + bmi + "です!")
    }
    
}

