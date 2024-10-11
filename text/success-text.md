Seu ambiente Prometheus foi instalado com sucesso! Abaixo seguem os dados de acesso:


***Prometheus***

**Admin Panel**: node${nodes.nginxphp[0].id}-${env.domain} ${nodes.nginxphp.endpoints[0].publicPort}

**Username**: ${nodes.cp.endpoints[0].publicPort}

**Password**: ${globals.PROM_PASS} 
