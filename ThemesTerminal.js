{
    "$help": "https://aka.ms/terminal-documentation",
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "actions": 
    [
        {
            "command": 
            {
                "action": "copy",
                "singleLine": false
            },
            "keys": "ctrl+c"
        },
        {
            "command": 
            {
                "action": "switchToTab",
                "index": 3
            },
            "keys": "ctrl+4"
        },
        {
            "command": "paste",
            "keys": "ctrl+v"
        },
        {
            "command": "find",
            "keys": "ctrl+f"
        },
        {
            "command": 
            {
                "action": "switchToTab",
                "index": 4
            },
            "keys": "ctrl+5"
        },
        {
            "command": "unbound",
            "keys": "ctrl+alt+2"
        },
        {
            "command": "unbound",
            "keys": "ctrl+alt+3"
        },
        {
            "command": "unbound",
            "keys": "ctrl+alt+4"
        },
        {
            "command": "unbound",
            "keys": "ctrl+alt+5"
        },
        {
            "command": "unbound",
            "keys": "ctrl+alt+1"
        },
        {
            "command": "unbound",
            "keys": "ctrl+shift+f"
        },
        {
            "command": "unbound",
            "keys": "ctrl+shift+w"
        },
        {
            "command": "unbound",
            "keys": "ctrl+shift+n"
        },
        {
            "command": "unbound",
            "keys": "ctrl+shift+t"
        },
        {
            "command": 
            {
                "action": "splitPane",
                "split": "auto",
                "splitMode": "duplicate"
            },
            "keys": "alt+shift+d"
        },
        {
            "command": 
            {
                "action": "switchToTab",
                "index": 1
            },
            "keys": "ctrl+2"
        },
        {
            "command": 
            {
                "action": "newTab"
            },
            "keys": "ctrl+t"
        },
        {
            "command": 
            {
                "action": "switchToTab",
                "index": 2
            },
            "keys": "ctrl+3"
        },
        {
            "command": 
            {
                "action": "switchToTab",
                "index": 0
            },
            "keys": "ctrl+1"
        },
        {
            "command": "closePane",
            "keys": "ctrl+w"
        },
        {
            "command": 
            {
                "action": "newWindow"
            },
            "keys": "ctrl+n"
        }
    ],
    "alwaysOnTop": false,
    "autoHideWindow": false,
    "centerOnLaunch": true,
    "copyFormatting": "none",
    "copyOnSelect": true,
    "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
    "focusFollowMouse": true,
    "initialCols": 121,
    "language": "es-ES",
    "newTabMenu": 
    [
        {
            "type": "remainingProfiles"
        }
    ],
    "profiles": 
    {
        "defaults": 
        {
            "adjustIndistinguishableColors": "always",
            "colorScheme": "Campbell",
            "elevate": true,
            "font": 
            {
                "face": "Consolas",
                "size": 14.0,
                "weight": "medium"
            },
            "opacity": 37,
            "padding": "29",
            "scrollbarState": "hidden",
            "useAcrylic": true,
            "useAtlasEngine": true
        },
        "list": 
        [
            {
                "commandline": "%SystemRoot%\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                "hidden": false,
                "name": "Windows PowerShell",
                "startingDirectory": "C:\\Users\\dyoli\\CloudYa"
            },
            {
                "commandline": "%SystemRoot%\\System32\\cmd.exe",
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "hidden": false,
                "name": "Command Prompt"
            },
            {
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "hidden": false,
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure"
            }
        ]
    },
    "schemes": 
    [
        {
            "background": "#FFECFC",
            "black": "#0C0C0C",
            "blue": "#A6CFFF",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#CEFF07",
            "brightPurple": "#FF4679",
            "brightRed": "#FF2727",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F8F9AD",
            "cursorColor": "#000000",
            "cyan": "#7CF8FF",
            "foreground": "#CCCCCC",
            "green": "#D6FF12",
            "name": "Campbell",
            "purple": "#EA81FF",
            "red": "#FFCED6",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#FDFF28"
        },
        {
            "background": "#012456",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell Powershell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#282C34",
            "black": "#282C34",
            "blue": "#61AFEF",
            "brightBlack": "#5A6374",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B6C2",
            "brightGreen": "#98C379",
            "brightPurple": "#C678DD",
            "brightRed": "#E06C75",
            "brightWhite": "#DCDFE4",
            "brightYellow": "#E5C07B",
            "cursorColor": "#FFFFFF",
            "cyan": "#56B6C2",
            "foreground": "#DCDFE4",
            "green": "#98C379",
            "name": "One Half Dark",
            "purple": "#C678DD",
            "red": "#E06C75",
            "selectionBackground": "#FFFFFF",
            "white": "#DCDFE4",
            "yellow": "#E5C07B"
        },
        {
            "background": "#FAFAFA",
            "black": "#383A42",
            "blue": "#0184BC",
            "brightBlack": "#4F525D",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B5C1",
            "brightGreen": "#98C379",
            "brightPurple": "#C577DD",
            "brightRed": "#DF6C75",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#E4C07A",
            "cursorColor": "#4F525D",
            "cyan": "#0997B3",
            "foreground": "#383A42",
            "green": "#50A14F",
            "name": "One Half Light",
            "purple": "#A626A4",
            "red": "#E45649",
            "selectionBackground": "#FFFFFF",
            "white": "#FAFAFA",
            "yellow": "#C18301"
        },
        {
            "background": "#002B36",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#FFFFFF",
            "cyan": "#2AA198",
            "foreground": "#839496",
            "green": "#859900",
            "name": "Solarized Dark",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#FDF6E3",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#002B36",
            "cyan": "#2AA198",
            "foreground": "#657B83",
            "green": "#859900",
            "name": "Solarized Light",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#FFFFFF",
            "cyan": "#06989A",
            "foreground": "#D3D7CF",
            "green": "#4E9A06",
            "name": "Tango Dark",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#FFFFFF",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#000000",
            "cyan": "#06989A",
            "foreground": "#555753",
            "green": "#4E9A06",
            "name": "Tango Light",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#000080",
            "brightBlack": "#808080",
            "brightBlue": "#0000FF",
            "brightCyan": "#00FFFF",
            "brightGreen": "#00FF00",
            "brightPurple": "#FF00FF",
            "brightRed": "#FF0000",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFF00",
            "cursorColor": "#FFFFFF",
            "cyan": "#008080",
            "foreground": "#C0C0C0",
            "green": "#008000",
            "name": "Vintage",
            "purple": "#800080",
            "red": "#800000",
            "selectionBackground": "#FFFFFF",
            "white": "#C0C0C0",
            "yellow": "#808000"
        }
    ],
    "startOnUserLogin": false,
    "theme": "light",
    "themes": 
    [
        {
            "name": "legacyDark",
            "tab": 
            {
                "background": null,
                "showCloseButton": "always",
                "unfocusedBackground": null
            },
            "window": 
            {
                "applicationTheme": "dark",
                "useMica": false
            }
        },
        {
            "name": "legacyLight",
            "tab": 
            {
                "background": null,
                "showCloseButton": "always",
                "unfocusedBackground": null
            },
            "window": 
            {
                "applicationTheme": "light",
                "useMica": false
            }
        },
        {
            "name": "legacySystem",
            "tab": 
            {
                "background": null,
                "showCloseButton": "always",
                "unfocusedBackground": null
            },
            "window": 
            {
                "applicationTheme": "system",
                "useMica": false
            }
        }
    ],
    "useAcrylicInTabRow": true,
    "windowingBehavior": "useAnyExisting"
}
