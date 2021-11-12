using System;
using System.Collections.Generic;

namespace Assignment_2{
    internal enum Objectives{
        mission1_objective1, mission1_objective2, mission1_objective3,
        mission2_objective1, mission2_objective2, mission2_objective3,
        mission3_objective1, mission3_objective2, mission3_objective3
    }
    internal enum ObjectiveFactories{
        mission1_factory, mission2_factory, mission3_factory,
    }
    
    internal interface IObjectiveFactory{
        IObjective getObjective(Objectives objective);
    }
    internal interface IObjective{
        void getDetails();
    }
    
    internal static class Program{
        private static readonly Dictionary<ObjectiveFactories, IObjectiveFactory> factories =
            new Dictionary<ObjectiveFactories, IObjectiveFactory>{
                {ObjectiveFactories.mission1_factory, new Mission1ObjectiveFactory()},
                {ObjectiveFactories.mission2_factory, new Mission2ObjectiveFactory()},
                {ObjectiveFactories.mission3_factory, new Mission3ObjectiveFactory()}
            };

        private static IObjective GetObjective(Objectives objective){
            switch (objective){
                case Objectives.mission1_objective1:
                case Objectives.mission1_objective2:
                case Objectives.mission1_objective3:
                    return factories[ObjectiveFactories.mission1_factory].getObjective(objective);
                
                case Objectives.mission2_objective1:
                case Objectives.mission2_objective2:
                case Objectives.mission2_objective3:
                    return factories[ObjectiveFactories.mission2_factory].getObjective(objective);
                
                case Objectives.mission3_objective1:
                case Objectives.mission3_objective2:
                case Objectives.mission3_objective3:
                    return factories[ObjectiveFactories.mission3_factory].getObjective(objective);
                
                default:
                    throw new ArgumentOutOfRangeException(nameof(objective), objective, null);
            }
        }
        
        // Client
        public static void Main(string[] args){
            var mission = GetObjective(Objectives.mission1_objective1);
            mission.getDetails();
        }
    }

    internal class Mission1ObjectiveFactory : IObjectiveFactory{
        public IObjective getObjective(Objectives objective){
            switch (objective){
                case Objectives.mission1_objective1:
                    return new Mission1Objective1();
                case Objectives.mission1_objective2:
                    return new Mission1Objective2();
                case Objectives.mission1_objective3:
                    return new Mission1Objective3();
                default:
                    throw new ArgumentOutOfRangeException(nameof(objective), objective, null);
            }
        }
    }
    internal class Mission2ObjectiveFactory : IObjectiveFactory{
        public IObjective getObjective(Objectives objective){
            switch (objective){
                case Objectives.mission2_objective1:
                    return new Mission2Objective1();
                case Objectives.mission2_objective2:
                    return new Mission2Objective2();
                case Objectives.mission2_objective3:
                    return new Mission2Objective3();
                default:
                    return null;
            }   
        }
    }
    internal class Mission3ObjectiveFactory : IObjectiveFactory{
        public IObjective getObjective(Objectives objective){
            switch (objective){
                case Objectives.mission3_objective1:
                    return new Mission3Objective1();
                case Objectives.mission3_objective2:
                    return new Mission3Objective2();
                case Objectives.mission3_objective3:
                    return new Mission3Objective3();
                default:
                    return null;
            }   
        }
    }

    internal class Mission1Objective1 : IObjective{
        public void getDetails(){
            Console.WriteLine("Mission 1 Objective 1");
        }
    };
    internal class Mission1Objective2 : IObjective{
        public void getDetails(){
            Console.WriteLine("Mission 1 Objective 1");
        }
    };
    internal class Mission1Objective3 : IObjective{
        public void getDetails(){
            Console.WriteLine("Mission 1 Objective 1");
        }
    };

    internal class Mission2Objective1 : IObjective{
        public void getDetails(){
            Console.WriteLine("Mission 1 Objective 1");
        }
    };
    internal class Mission2Objective2 : IObjective{
        public void getDetails(){
            Console.WriteLine("Mission 1 Objective 1");
        }
    };
    internal class Mission2Objective3 : IObjective{
        public void getDetails(){
            Console.WriteLine("Mission 1 Objective 1");
        }
    };

    internal class Mission3Objective1 : IObjective{
        public void getDetails(){
            Console.WriteLine("Mission 1 Objective 1");
        }
    };
    internal class Mission3Objective2 : IObjective{
        public void getDetails(){
            Console.WriteLine("Mission 1 Objective 1");
        }
    };
    internal class Mission3Objective3 : IObjective{
        public void getDetails(){
            Console.WriteLine("Mission 1 Objective 1");
        }
    };
}