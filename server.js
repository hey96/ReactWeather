var express = require('express'); //подключаем модули

//Create our app, создаём приложение app
var app = express();
const PORT = process.env.PORT || 3000;

//Для предоставления статических файлов, например, изображений, файлов CSS и JavaScript в Express
//используется функция промежуточной обработки express.static.
//Для того чтобы начать непосредственное предоставление файлов, необходимо передать имя каталога,
//в котором находятся статические ресурсы, в функцию промежуточной обработки express.static.
//Например, воспользуйтесь приведенным ниже кодом для предоставления изображений, файлов CSS и JavaScript,
//расположенных в каталоге public:
app.use(function(req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'http') {
		next();
	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
});
app.use(express.static('public'));

//Приложение запускает сервер и слушает соединения на порте 3000. Приложение выдает ответ
//“Express server is up on port 3000” на запросы, адресованные корневому URL (/) или маршруту. Для всех остальных
//путей ответом будет 404 Not Found.
app.listen(PORT, function(){
	console.log('Express server is up on port ' + PORT);
});
