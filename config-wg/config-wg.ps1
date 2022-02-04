# Run this script by Powershell >= 7.0

# Change the following variables to suit your needs.
$WIREGUARD_LOCAL_LISTEN_PORT = "51820";
$WIREGUARD_REMOTE_LISTEN_PORT = "51820";

$WIREGUARD_LOCAL_PRIVATE_KEY = "" # Leave empty if you want to generate a new key
$WIREGUARD_REMOTE_PRIVATE_KEY = "" # Leave empty if you want to generate a new key

$LOCAL_IP_ADDRESS = "" # Leave empty if it do not have one.
$REMOTE_IP_ADDRESS = "" # Leave empty if it do not have one.

$MTU = "1440" # MTU size for WireGuard

# DO NOT CHANGE ANYTHING BELOW THIS LINE

$LocalConfig = ""
$RemoteConfig = ""

if (LOCAL_IP_ADDRESS -eq "" and $REMOTE_IP_ADDRESS -eq "")
{
    Write-Host "WARNING: You have not specified any IP address."
}


$ConfigLocalPrivateKey = $WIREGUARD_LOCAL_PRIVATE_KEY -eq "" ? $(wg genkey) : $WIREGUARD_LOCAL_PRIVATE_KEY
$ConfigRemotePrivateKey = $WIREGUARD_REMOTE_PRIVATE_KEY -eq "" ? $(wg genkey) : $WIREGUARD_REMOTE_PUBLIC_KEY
$ConfigLocalPublicKey = $ConfigLocalPrivateKey | wg pubkey
$ConfigRemotePublicKey = $ConfigRemotePrivateKey | wg pubkey


# Generate Local Config
$LocalConfig += "[Interface]`n"
$LocalConfig += "PrivateKey = $ConfigLocalPrivateKey`n"
$LocalConfig += "ListenPort = $WIREGUARD_LOCAL_LISTEN_PORT`n"
$LocalConfig += "Address = 10.10.10.1/32`n"
$LocalConfig += "MTU = $MTU`n"

$LocalConfig += "`n"

$LocalConfig += "[Peer]`n"
$LocalConfig += "PublicKey = $ConfigRemotePublicKey`n"
$LocalConfig += "AllowedIPs = 10.10.10.0/24`n"
if ($REMOTE_IP_ADDRESS -ne "")
{
    $LocalConfig += "Endpoint = ${REMOTE_IP_ADDRESS}:${WIREGUARD_REMOTE_LISTEN_PORT}`n"
}
else
{
    $LocalConfig += "PersistentKeepalive = 25`n"
}

# Generate Remote Config
$RemoteConfig += "[Interface]`n"
$RemoteConfig += "PrivateKey = $ConfigRemotePrivateKey`n"
$RemoteConfig += "ListenPort = $WIREGUARD_REMOTE_LISTEN_PORT`n"
$RemoteConfig += "Address = 10.10.10.2/32`n"
$RemoteConfig += "MTU = $MTU`n"

$RemoteConfig += "`n"

$RemoteConfig += "[Peer]`n"
$RemoteConfig += "PublicKey = $ConfigLocalPublicKey`n"
$RemoteConfig += "AllowedIPs = 10.10.10.0/24`n"
if ($LOCAL_IP_ADDRESS -ne "")
{
    $RemoteConfig += "Endpoint = ${LOCAL_IP_ADDRESS}:${WIREGUARD_LOCAL_LISTEN_PORT}`n"
}
else
{
    $RemoteConfig += "PersistentKeepalive = 25`n"
}

# Write Configs
Write-Host "-----LOCAL CONFIG-----"
Write-Host $LocalConfig
Write-Host "-----REMOTE CONFIG-----"
Write-Host $RemoteConfig




