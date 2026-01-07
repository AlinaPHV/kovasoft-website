# Получение Ed25519 публичного ключа с сервера

## Автоматический способ (если установлен PuTTY/plink)

Запустите скрипт:
```powershell
.\get_server_key.ps1
```

## Ручной способ

### 1. Подключитесь к серверу:
```bash
ssh root@193.233.244.91
```
Пароль: `72hRIym9qcPSYTOvem`

### 2. Проверьте наличие Ed25519 ключа:
```bash
cat ~/.ssh/id_ed25519.pub
```

### 3. Если ключа нет, создайте его:
```bash
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N '' -C 'root@server'
```

### 4. Покажите публичный ключ:
```bash
cat ~/.ssh/id_ed25519.pub
```

Публичный ключ будет начинаться с `ssh-ed25519` и содержать длинную строку символов.

## Альтернативный способ через PowerShell (если установлен модуль Posh-SSH)

```powershell
Install-Module -Name Posh-SSH -Force
$password = ConvertTo-SecureString "72hRIym9qcPSYTOvem" -AsPlainText -Force
$credential = New-Object System.Management.Automation.PSCredential("root", $password)
$session = New-SSHSession -ComputerName "193.233.244.91" -Credential $credential -AcceptKey
$result = Invoke-SSHCommand -SessionId $session.SessionId -Command "cat ~/.ssh/id_ed25519.pub || (ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N '' -C 'root@server' && cat ~/.ssh/id_ed25519.pub)"
Write-Host $result.Output
Remove-SSHSession -SessionId $session.SessionId
```

