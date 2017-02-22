$repo_url = Read-Host("Please Enter Repo's URL(Main Page)") 
$issues_number = Read-Host("Please enter issues number")
$issue_page = $repo_url + "/issues/"
for($i=1;$i -le $issues_number;$i++)
{
    echo ("Downloading Issues " + [string]$i)
    Invoke-WebRequest -OutFile ([string]$i + ".html") ($issue_page + [string]($i))
}