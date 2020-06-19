using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace EmployeeServiceDemo.Controllers
{
    public class EmployeesController : ApiController
    {
        // GET: Employees
        [System.Web.Http.Authorize]
        public IEnumerable<Employee> Get()
        {
            using (EmployeeDBEntities entities = new EmployeeDBEntities())
                return entities.Employees.ToList(); 
        }
    }
}