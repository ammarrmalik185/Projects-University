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
    public class ManagesController : Controller
    {
        private DataContext db = new DataContext();

        // GET: Manages
        public ActionResult Index()
        {
            var manages = db.Manages.Include(m => m.departmentRef).Include(m => m.employeeRef);
            return View(manages.ToList());
        }

        // GET: Manages/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Manages manages = db.Manages.Find(id);
            if (manages == null)
            {
                return HttpNotFound();
            }
            return View(manages);
        }

        // GET: Manages/Create
        public ActionResult Create()
        {
            ViewBag.departmentDno = new SelectList(db.Departments, "dno", "dname");
            ViewBag.employeeSsn = new SelectList(db.Employees, "ssn", "salary");
            return View();
        }

        // POST: Manages/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,employeeSsn,departmentDno")] Manages manages)
        {
            if (ModelState.IsValid)
            {
                db.Manages.Add(manages);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.departmentDno = new SelectList(db.Departments, "dno", "dname", manages.departmentDno);
            ViewBag.employeeSsn = new SelectList(db.Employees, "ssn", "salary", manages.employeeSsn);
            return View(manages);
        }

        // GET: Manages/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Manages manages = db.Manages.Find(id);
            if (manages == null)
            {
                return HttpNotFound();
            }
            ViewBag.departmentDno = new SelectList(db.Departments, "dno", "dname", manages.departmentDno);
            ViewBag.employeeSsn = new SelectList(db.Employees, "ssn", "salary", manages.employeeSsn);
            return View(manages);
        }

        // POST: Manages/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,employeeSsn,departmentDno")] Manages manages)
        {
            if (ModelState.IsValid)
            {
                db.Entry(manages).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.departmentDno = new SelectList(db.Departments, "dno", "dname", manages.departmentDno);
            ViewBag.employeeSsn = new SelectList(db.Employees, "ssn", "salary", manages.employeeSsn);
            return View(manages);
        }

        // GET: Manages/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Manages manages = db.Manages.Find(id);
            if (manages == null)
            {
                return HttpNotFound();
            }
            return View(manages);
        }

        // POST: Manages/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Manages manages = db.Manages.Find(id);
            db.Manages.Remove(manages);
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
