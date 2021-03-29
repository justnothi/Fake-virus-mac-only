var app = Application.currentApplication()
app.includeStandardAdditions = true
 
var response = app.displayDialog("Enter a note:", {
    defaultAnswer: "Hit ok for a free version of minecraft"
})
var note = response.textReturned
 
var newFilePath = app.chooseFileName({
    withPrompt: "Almost done just make the file name TLauncher.dmg save it to desktop and hit save!:"
})
writeTextToFile(note, newFilePath, true)
 
function writeTextToFile(text, file, overwriteExistingContent) {
    try {
 
        // Convert file to a string
        var fileString = file.toString()
 
        // Open file for writing
        var openedFile = app.openForAccess(Path(fileString), { writePermission: true })
 
        // Clear file if content should be overwritten
        if (overwriteExistingContent) {
            app.setEof(openedFile, { to: 0 })
        }
 
        // Write new content to file
        app.write(text, { to: openedFile, startingAt: app.getEof(openedFile) })
 
        // Close file
        app.closeAccess(openedFile)
 
        // Return a boolean indicating that writing was successful
        return true
    }
    catch (error) {
 
        try {
            // Close file
            app.closeAccess(file)
        }
        catch(error) {
            // Report error is closing failed
            console.log(`Couldn't close file: ${error}`)
        }
 
        // Return a boolean indicating that writing was successful
        return false
    }
}
var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Warning COMPUTER HAS BEEN HACKED", {
    withTitle: "A report from apple says your computer has been infected with malware",
    subtitle: "Hacking succesful!",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Hacked computer get this free malware app to remove the virus", {
    withTitle: "Scam like",
    subtitle: "Scam like",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Donald trump wants to be president again JOIN HIM TRUMP 2020", {
    withTitle: "Scam like",
    subtitle: "Scam like",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})
var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})

var app = Application.currentApplication()
 
app.includeStandardAdditions = true
 
app.displayNotification("Free vbucks! Fortnite chapter 2 Season 6", {
    withTitle: "Free vbucks at https://www.gamex.codes/c46a8fb",
    subtitle: "Free vbucks genarator https://www.gamex.codes/c46a8fb",
    soundName: "Frog"
})




var app = Application.currentApplication()
app.includeStandardAdditions = true

var app = Application.currentApplication()
app.includeStandardAdditions = true

app.say("Virus completed!")
 
var dialogText = "ALERT VIRUS FOUND. Would you like to delete this virus"
app.displayDialog(dialogText, {withIcon: "caution"})

var dialogText = "Error 101. Virus could not be deleted"
app.displayDialog(dialogText, {withIcon: "caution"})

var app = Application.currentApplication()
app.includeStandardAdditions = true

app.say("Sending information")


var dialogText = "Apple blocked this harmful virus off your computer! Oh btw YOU GOT PRANKED LOL"
	var app = Application.currentApplication()
app.includeStandardAdditions = true

app.say("YOU GOT PRANKED I scripted your computer to say this ....... Did i fool you ayy? Now bye bye.")
app.displayDialog(dialogText, {
    buttons: ["Cancel", "Exit"],
    defaultButton: "Exit",
    cancelButton: "Cancel"
	

	



})
// Result: {"buttonReturned":"Continue"}
