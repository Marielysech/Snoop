const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const initialize = require('../config/passport-config')
const passport = require('passport')

initialize(passport);

async function registerNewUser (req, res) { 

    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        message: `An account is already associated with <${req.body.email}>`,
      });

    } else {
    
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            
            const user = await userModel.create({
                //TODO : add profile picture creation
                name: req.body.name,
                userName: req.body.userName,
                email: req.body.email,
                password: hashedPassword        
            })
                console.log(user)
                return res.status(200).json({message: `Account linked to ${req.body.email} created`});

        } catch(error) {
            console.log(error)
        }
    }
}

async function loginUser (req, res, next) {

    passport.authenticate("local", function (err, user) {
        if (err || !user) {
          res.status(401).json({message: "Password and email address do not match"});
        } else {
          req.login(user, function (err) {
            if (err) {
              return next(err);
            }
            console.log('User is connected' + user)
            return res.status(200).json({
                email: user.email,
                name: user.name,
                userName: user.userName,
                // picture: user.picture
             });
          });
        }
      })(req, res, next);
    };

async function logoutUser (req, res) {
    try {
      req.logOut() 
      res.clearCookie("connect.sid", { path: "/" });

      req.session.destroy(function (err) {
          if (err) {
          return next(err);
          }
          console.log('user is disconnected')
          res.status(200).json({message:"You've been logged out"});
      });
    } catch(error) {
      console.log(error)
  }
}

async function deleteUser (req,res) {
//change req.body.email for _id: req.user._id
  try {
    console.log(req.user)
    const result = await userModel.deleteOne({name: req.user.name});
    if (result.deletedCount === 1) {
      res.status(200).json({message: `Successfully deleted ${req.user.name} account.`});
    } else {
      res.status(400).json({message: `This user doesn't exist`});
    }
  } catch(error) {
    console.log(error)
}

}

async function updateUser (req,res) { 

    let hashedPassword
    req.body.password && (hashedPassword = await bcrypt.hash(req.body.password, 10))

    console.log(req.user)
    let userID = req.user._id

    let newUserInfo = {
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
        // picture: req.body.picture 
    }
    
    // FOR LOOP FOR THE OBJECT TO TRY
    // for (const key in newUserInfo) {
    //     newUserInfo[key] && await userModel.updateOne({_id: user.id}, {key: newUserInfo[key]})
    // }

    try {
    newUserInfo.name && await userModel.updateOne({_id: userID}, {name: newUserInfo.name}) //update name
    newUserInfo.userName && await userModel.updateOne({_id: userID}, {userName: newUserInfo.userName}) //update userName
    newUserInfo.email && await userModel.updateOne({_id: userID}, {email: newUserInfo.email}) //update email
    newUserInfo.password && await userModel.updateOne({_id: userID}, {password: newUserInfo.password}) //update password

    return res.status(200).json({
        message: "User information updated",
        email: user.email,
        name: user.name,
        userName: user.userName,
        // picture: user.picture
     });
    } catch(error) {
      console.log(error)
  }
  
}


module.exports = {registerNewUser, loginUser, logoutUser, deleteUser, updateUser}