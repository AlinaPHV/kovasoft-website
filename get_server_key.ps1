# Скрипт для получения Ed25519 публичного ключа с сервера
Import-Module Posh-SSH

$serverIP = "193.233.244.91"
$username = "root"
$password = "72hRIym9qcPSYTOvem"

Write-Host "Подключение к серверу $serverIP..." -ForegroundColor Yellow

try {
    # Создаем credential объект
    $securePassword = ConvertTo-SecureString $password -AsPlainText -Force
    $credential = New-Object System.Management.Automation.PSCredential($username, $securePassword)
    
    # Подключаемся к серверу
    $session = New-SSHSession -ComputerName $serverIP -Credential $credential -AcceptKey -ErrorAction Stop
    Write-Host "Подключение установлено!" -ForegroundColor Green
    
    # Проверяем наличие ключа
    Write-Host "`nПроверка наличия Ed25519 ключа..." -ForegroundColor Cyan
    $checkKey = Invoke-SSHCommand -SessionId $session.SessionId -Command "test -f ~/.ssh/id_ed25519.pub && echo 'EXISTS' || echo 'NOT_FOUND'"
    
    if ($checkKey.Output -match "EXISTS") {
        Write-Host "Ключ найден! Получаю публичный ключ..." -ForegroundColor Green
        $result = Invoke-SSHCommand -SessionId $session.SessionId -Command "cat ~/.ssh/id_ed25519.pub"
        Write-Host "`n" + "="*60 -ForegroundColor Cyan
        Write-Host "ПУБЛИЧНЫЙ КЛЮЧ ED25519:" -ForegroundColor Green
        Write-Host "="*60 -ForegroundColor Cyan
        Write-Host $result.Output -ForegroundColor White
        Write-Host "="*60 -ForegroundColor Cyan
    }
    else {
        Write-Host "Ключ не найден. Создаю новый Ed25519 ключ..." -ForegroundColor Yellow
        $createKey = Invoke-SSHCommand -SessionId $session.SessionId -Command "ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N '' -C 'root@server' -q"
        
        if ($createKey.ExitStatus -eq 0) {
            Write-Host "Ключ успешно создан! Получаю публичный ключ..." -ForegroundColor Green
            $result = Invoke-SSHCommand -SessionId $session.SessionId -Command "cat ~/.ssh/id_ed25519.pub"
            Write-Host "`n" + "="*60 -ForegroundColor Cyan
            Write-Host "НОВЫЙ ПУБЛИЧНЫЙ КЛЮЧ ED25519:" -ForegroundColor Green
            Write-Host "="*60 -ForegroundColor Cyan
            Write-Host $result.Output -ForegroundColor White
            Write-Host "="*60 -ForegroundColor Cyan
        }
        else {
            Write-Host "Ошибка при создании ключа!" -ForegroundColor Red
            Write-Host $createKey.Error
        }
    }
    
    # Закрываем сессию
    Remove-SSHSession -SessionId $session.SessionId | Out-Null
    Write-Host "`nСоединение закрыто." -ForegroundColor Gray
    
}
catch {
    Write-Host "Ошибка подключения: $_" -ForegroundColor Red
    Write-Host "`nПопробуйте подключиться вручную:" -ForegroundColor Yellow
    Write-Host "ssh root@$serverIP" -ForegroundColor White
    Write-Host "Пароль: $password" -ForegroundColor Gray
}
Import-Module Posh-SSH

$serverIP = "193.233.244.91"
$username = "root"
$password = "72hRIym9qcPSYTOvem"

Write-Host "Подключение к серверу $serverIP..." -ForegroundColor Yellow

try {
    # Создаем credential объект
    $securePassword = ConvertTo-SecureString $password -AsPlainText -Force
    $credential = New-Object System.Management.Automation.PSCredential($username, $securePassword)
    
    # Подключаемся к серверу
    $session = New-SSHSession -ComputerName $serverIP -Credential $credential -AcceptKey -ErrorAction Stop
    Write-Host "Подключение установлено!" -ForegroundColor Green
    
    # Проверяем наличие ключа
    Write-Host "`nПроверка наличия Ed25519 ключа..." -ForegroundColor Cyan
    $checkKey = Invoke-SSHCommand -SessionId $session.SessionId -Command "test -f ~/.ssh/id_ed25519.pub && echo 'EXISTS' || echo 'NOT_FOUND'"
    
    if ($checkKey.Output -match "EXISTS") {
        Write-Host "Ключ найден! Получаю публичный ключ..." -ForegroundColor Green
        $result = Invoke-SSHCommand -SessionId $session.SessionId -Command "cat ~/.ssh/id_ed25519.pub"
        Write-Host "`n" + "="*60 -ForegroundColor Cyan
        Write-Host "ПУБЛИЧНЫЙ КЛЮЧ ED25519:" -ForegroundColor Green
        Write-Host "="*60 -ForegroundColor Cyan
        Write-Host $result.Output -ForegroundColor White
        Write-Host "="*60 -ForegroundColor Cyan
    }
    else {
        Write-Host "Ключ не найден. Создаю новый Ed25519 ключ..." -ForegroundColor Yellow
        $createKey = Invoke-SSHCommand -SessionId $session.SessionId -Command "ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N '' -C 'root@server' -q"
        
        if ($createKey.ExitStatus -eq 0) {
            Write-Host "Ключ успешно создан! Получаю публичный ключ..." -ForegroundColor Green
            $result = Invoke-SSHCommand -SessionId $session.SessionId -Command "cat ~/.ssh/id_ed25519.pub"
            Write-Host "`n" + "="*60 -ForegroundColor Cyan
            Write-Host "НОВЫЙ ПУБЛИЧНЫЙ КЛЮЧ ED25519:" -ForegroundColor Green
            Write-Host "="*60 -ForegroundColor Cyan
            Write-Host $result.Output -ForegroundColor White
            Write-Host "="*60 -ForegroundColor Cyan
        }
        else {
            Write-Host "Ошибка при создании ключа!" -ForegroundColor Red
            Write-Host $createKey.Error
        }
    }
    
    # Закрываем сессию
    Remove-SSHSession -SessionId $session.SessionId | Out-Null
    Write-Host "`nСоединение закрыто." -ForegroundColor Gray
    
}
catch {
    Write-Host "Ошибка подключения: $_" -ForegroundColor Red
    Write-Host "`nПопробуйте подключиться вручную:" -ForegroundColor Yellow
    Write-Host "ssh root@$serverIP" -ForegroundColor White
    Write-Host "Пароль: $password" -ForegroundColor Gray
}Import-Module Posh-SSH

$serverIP = "193.233.244.91"
$username = "root"
$password = "72hRIym9qcPSYTOvem"

Write-Host "Подключение к серверу $serverIP..." -ForegroundColor Yellow

try {
    # Создаем credential объект
    $securePassword = ConvertTo-SecureString $password -AsPlainText -Force
    $credential = New-Object System.Management.Automation.PSCredential($username, $securePassword)
    
    # Подключаемся к серверу
    $session = New-SSHSession -ComputerName $serverIP -Credential $credential -AcceptKey -ErrorAction Stop
    Write-Host "Подключение установлено!" -ForegroundColor Green
    
    # Проверяем наличие ключа
    Write-Host "`nПроверка наличия Ed25519 ключа..." -ForegroundColor Cyan
    $checkKey = Invoke-SSHCommand -SessionId $session.SessionId -Command "test -f ~/.ssh/id_ed25519.pub && echo 'EXISTS' || echo 'NOT_FOUND'"
    
    if ($checkKey.Output -match "EXISTS") {
        Write-Host "Ключ найден! Получаю публичный ключ..." -ForegroundColor Green
        $result = Invoke-SSHCommand -SessionId $session.SessionId -Command "cat ~/.ssh/id_ed25519.pub"
        Write-Host "`n" + "="*60 -ForegroundColor Cyan
        Write-Host "ПУБЛИЧНЫЙ КЛЮЧ ED25519:" -ForegroundColor Green
        Write-Host "="*60 -ForegroundColor Cyan
        Write-Host $result.Output -ForegroundColor White
        Write-Host "="*60 -ForegroundColor Cyan
    }
    else {
        Write-Host "Ключ не найден. Создаю новый Ed25519 ключ..." -ForegroundColor Yellow
        $createKey = Invoke-SSHCommand -SessionId $session.SessionId -Command "ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -N '' -C 'root@server' -q"
        
        if ($createKey.ExitStatus -eq 0) {
            Write-Host "Ключ успешно создан! Получаю публичный ключ..." -ForegroundColor Green
            $result = Invoke-SSHCommand -SessionId $session.SessionId -Command "cat ~/.ssh/id_ed25519.pub"
            Write-Host "`n" + "="*60 -ForegroundColor Cyan
            Write-Host "НОВЫЙ ПУБЛИЧНЫЙ КЛЮЧ ED25519:" -ForegroundColor Green
            Write-Host "="*60 -ForegroundColor Cyan
            Write-Host $result.Output -ForegroundColor White
            Write-Host "="*60 -ForegroundColor Cyan
        }
        else {
            Write-Host "Ошибка при создании ключа!" -ForegroundColor Red
            Write-Host $createKey.Error
        }
    }
    
    # Закрываем сессию
    Remove-SSHSession -SessionId $session.SessionId | Out-Null
    Write-Host "`nСоединение закрыто." -ForegroundColor Gray
    
}
catch {
    Write-Host "Ошибка подключения: $_" -ForegroundColor Red
    Write-Host "`nПопробуйте подключиться вручную:" -ForegroundColor Yellow
    Write-Host "ssh root@$serverIP" -ForegroundColor White
    Write-Host "Пароль: $password" -ForegroundColor Gray
}