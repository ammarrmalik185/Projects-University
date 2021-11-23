using System;

namespace MyCompiler {
    class Program {
        public static void Main(string[] args) {
            IComputerBuilder builder = new ComputerBuilder();
            var Computer = builder
                .AddType(1)
                .AddProcessor(5)
                .AddRam(3)
                .AddHDD(2000)
                .build();
            Console.WriteLine(Computer);
        }
    }
    
    class ComputerSystem{
        public int Type { get; set; }
        public int Processor { get; set; }
        public int Ram  { get; set; }
        public int HDD { get; set; }

        public ComputerSystem(){}

        public void AddType(int type){
            Type = type;
        }

        public void AddProcessor(int processor){
            Processor = processor;
        }

        public void AddRam(int ram){
            Ram = ram;
        }

        public void AddHDD(int hdd){
            HDD = hdd;
        }
        
        public override string ToString(){
            return $"Type: {Type}, Processor: {Processor}, Ram: {Ram}, HDD: {HDD}";
        }

    }
    
    interface IComputerBuilder{
        IComputerBuilder AddType(int type);
        IComputerBuilder AddProcessor(int processor);
        IComputerBuilder AddRam(int ram);
        IComputerBuilder AddHDD(int hdd);
        ComputerSystem  build();
    }

    class ComputerBuilder : IComputerBuilder{
        private ComputerSystem _instance = new ComputerSystem();
        public IComputerBuilder AddType(int type){
            _instance.AddType(type);
            return this;
        }

        public IComputerBuilder AddProcessor(int processor){
            _instance.AddProcessor(processor);
            return this;
        }

        public IComputerBuilder AddRam(int ram){
            _instance.AddRam(ram);
            return this;
        }

        public IComputerBuilder AddHDD(int hdd){
            _instance.AddHDD(hdd);
            return this;
        }

        public ComputerSystem build(){
            var returnObj = _instance;
            _instance = new ComputerSystem();
            return returnObj;
        }
    }
}

