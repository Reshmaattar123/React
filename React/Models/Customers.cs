using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace React.Models
{
    public partial class Customers
    {
        public Customers()
        {
            Sale = new HashSet<Sale>();
        }

        public int CustomerId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public virtual ICollection<Sale> Sale { get; set; }
    }
}
