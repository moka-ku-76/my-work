//
//  ViewController.swift
//  ButtonTestApp
//
//  Created by 岡　誠道 on 2020/10/02.
//  Copyright © 2020 岡　誠道. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var textLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func tapButton(_ sender: Any) {
        textLabel.text = "Hello World"
    }
}



