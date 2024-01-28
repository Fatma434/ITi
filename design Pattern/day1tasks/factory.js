class GradeFactory {
    static getGrade(score) {
      if (score > 90) {
        return new ExcellentGrade();
      } else if (score > 75) {
        return new VeryGoodGrade();
      } else if (score > 65) {
        return new GoodGrade();
      } else {
        return new FailGrade();
      }
    }
  }
  
  class ExcellentGrade {
    getGrade() {
      return "Excellent";
    }
  }
  
  class VeryGoodGrade {
    getGrade() {
      return "Very Good";
    }
  }
  
  class GoodGrade {
    getGrade() {
      return "Good";
    }
  }
  
  class FailGrade {
    getGrade() {
      return "Failed";
    }
  }
  
  const score = 90;
  const grade = GradeFactory.getGrade(score);
  console.log(`Score: ${score}, Grade: ${grade.getGrade()}`);
  
