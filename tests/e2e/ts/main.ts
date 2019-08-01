import { DBConnection } from "./components/dbconnection.component"
import { SeguradosQuery } from "./db/queries/segurados.query"
//import { Seguradoras, QUERY } from "./components/enums.component";
import { Segurado } from "./models/segurado.model";
import { TesteQuery } from "./db/queries/teste.query";


var dbconnection = new DBConnection<Segurado>();
var seguradosQuery = new SeguradosQuery();
var query = new TesteQuery();

//dbconnection.conecta(seguradosQuery.getQuery(Seguradoras.CAIXA, QUERY.MAX_RESULT));
dbconnection.conecta(query.getQuery());






