local isUIOpen = false

-- Basic function to toggle UI visibility
function ToggleUI()
    isUIOpen = not isUIOpen
    SetNuiFocus(isUIOpen, isUIOpen)
    SendNUIMessage({
        action = "toggleUI",
        data = {
            show = isUIOpen
        }
    })
end

-- Example command to toggle UI
RegisterCommand('example_toggleui', function()
    ToggleUI()
end, false)

-- Example of sending data to UI
RegisterCommand('example_updateui', function()
    SendNUIMessage({
        action = "updateData",
        data = {
            playerName = GetPlayerName(PlayerId()),
            playerId = GetPlayerServerId(PlayerId()),
            health = GetEntityHealth(PlayerPedId())
        }
    })
end, false)

-- NUI Callback handlers
RegisterNUICallback('closeUI', function(data, cb)
    isUIOpen = false
    SetNuiFocus(false, false)
    cb('ok')
end)

-- Example of handling UI action
RegisterNUICallback('doAction', function(data, cb)
    if data.type == 'notification' then
        -- Example: Show game notification
        BeginTextCommandThefeedPost('STRING')
        AddTextComponentSubstringPlayerName(data.message)
        EndTextCommandThefeedPostTicker(false, true)
    end
    cb({ status = 'success' })
end)