Seu ambiente Prometheus foi instalado com sucesso! Abaixo seguem os dados de acesso:


***Prometheus***

**Admin Panel**: [https://"node"+"${nodes.nginxphp[0].id}-" + "${env.domain}:" + oResp.object.publicPort]() 
**Username**: Prometheus  
**Password**: ${globals.PROM_PASS} 
