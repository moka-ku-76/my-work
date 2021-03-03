//
//  ChatoRoomTableViewCell.swift
//  ChatApp
//
//  Created by 岡　誠道 on 2020/10/07.
//  Copyright © 2020 岡　誠道. All rights reserved.
//

import UIKit

class ChatRoomTableViewCell: UITableViewCell{
    
    @IBOutlet weak var userImageView: UIImageView!
    @IBOutlet weak var messageTextView: UITextView!
    @IBOutlet weak var dateLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
        backgroundColor = .clear
        userImageView.layer.cornerRadius = 30
        messageTextView.layer.cornerRadius = 15
    }
    
    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
}
