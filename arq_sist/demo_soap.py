from zeep import Client

client = Client('http://soapclient.com/xml/soapresponder.wsdl') # esse serviço ecoa os dados de entrada
result = client.service.Method1(bstrParam1='oi', bstrParam2='tchau')
result2 = client.service.Method1('carai', 'cuzao') #funciona, mas como vimos nas Functions, é melhor explicitar quais os parâmetros para evitar erros
print(result)
print(result2)