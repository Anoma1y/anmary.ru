"use strict";$.ajax({url:"getOrder",type:"GET"}).done(function(o){console.log(JSON.parse(o))}).fail(function(){console.log("error")});