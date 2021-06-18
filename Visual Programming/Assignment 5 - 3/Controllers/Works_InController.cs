using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Assignment_5___3.Data;
using Assignment_5___3.Models;

namespace Assignment_5___3.Controllers
{
    public class Works_InController : Controller
    {
        private DataContext db = new DataContext();

        // GET: Works_In
        public ActionResult Index()
        {
            var works_In = db.Works_In.Include(w => w.departmentRef).Include(w => w.employeeRef);
            return View(works_In.ToList());
        }

        // GET: Works_In/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Works_In works_In = db.Works_In.Find(id);
            if (works_In == null)
            {
                return HttpNotFound();
            }
            return View(works_In);
        }

        // GET: Works_In/Create
        public ActionResult Create()
        {
            ViewBag.departmentDno = new SelectList(db.Departments, "dno", "dname");
            ViewBag.employeeSsn = new SelectList(db.Employees, "ssn", "salary");
            return View();
        }

        // POST: Works_In/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,employeeSsn,departmentDno")] Works_In works_In)
        {
            if (ModelState.IsValid)
            {
                db.Works_In.Add(works_In);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.departmentDno = new SelectList(db.Departments, "dno", "dname", works_In.departmentDno);
            ViewBag.employeeSsn = new SelectList(db.Employees, "ssn", "salary", works_In.employeeSsn);
            return View(works_In);
        }

        // GET: Works_In/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Works_In works_In = db.Works_In.Find(id);
            if (works_In == null)
            {
                return HttpNotFound();
            }
            ViewBag.departmentDno = new SelectList(db.Departments, "dno", "dname", works_In.departmentDno);
            ViewBag.employeeSsn = new SelectList(db.Employees, "ssn", "salary", works_In.employeeSsn);
            return View(works_In);
        }

        // POST: Works_In/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,employeeSsn,departmentDno")] Works_In works_In)
        {
            if (ModelState.IsValid)
            {
                db.Entry(works_In).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.departmentDno = new SelectList(db.Departments, "dno", "dname", works_In.departmentDno);
            ViewBag.employeeSsn = new SelectList(db.Employees, "ssn", "salary", works_In.employeeSsn);
            return View(works_In);
        }

        // GET: Works_In/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Works_In works_In = db.Works_In.Find(id);
            if (works_In == null)
            {
                return HttpNotFound();
            }
            return View(works_In);
        }

        // POST: Works_In/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Works_In works_In = db.Works_In.Find(id);
            db.Works_In.Remove(works_In);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
