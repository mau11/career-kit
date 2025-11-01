let experienceCount = 1;
let educationCount = 1;

function addExperience() {
  const container = document.getElementById("experience-container");

  const newSection = document.createElement("section");
  newSection.classList.add("resume-section");
  newSection.innerHTML = `
    <h4>Experience ${experienceCount + 1}</h4>
    <button type="button" onclick="this.parentElement.remove()">Remove</button>
    <section class="form-row">
      <div class="form-group">
        <label>Job Title</label>
        <input type="text" name="experience[${experienceCount}][jobTitle]" />
      </div>
      <div class="form-group">
        <label>Company</label>
        <input type="text" name="experience[${experienceCount}][company]" />
      </div>
      <div class="form-group sm-width">
        <label>Location</label>
        <input type="text" name="experience[${experienceCount}][location]" />
      </div>
    </section>
    <section class="form-row">
      <div class="form-group">
        <label>Start Date</label>
        <input type="date" name="experience[${experienceCount}][startDate]" />
      </div>
      <div class="form-group">
        <label>End Date</label>
        <input type="date" name="experience[${experienceCount}][endDate]" />
      </div>
      <label class="checkbox-label">
        <input
          type="checkbox"
          name="experience[${experienceCount}][currentJob]"
          value="true"
        />
        Current Role
      </label>
    </section>
    <section class="form-row">
      <div class="form-group">
        <label>Responsibilities</label>
        <textarea name="experience[${experienceCount}][responsibilities]"></textarea>
      </div>
    </section>
  `;
  container.appendChild(newSection);
  experienceCount++;
}

function addEducation() {
  const container = document.getElementById("education-container");

  const newSection = document.createElement("section");
  newSection.classList.add("resume-section");
  newSection.innerHTML = `
    <h4>Education ${educationCount + 1}</h4>
    <button type="button" onclick="this.parentElement.remove()">Remove</button>
      <section class="form-row">
        <div class="form-group">
          <label>School</label>
          <input type="text" name="education[${educationCount}][school]" />
        </div>
        <div class="form-group">
          <label>Location</label>
          <input type="text" name="education[${educationCount}][location]" />
        </div>
      </section>
      <section class="form-row">
        <div class="form-group">
          <label>Degree</label>
          <input type="text" name="education[${educationCount}][degree]" />
        </div>
        <div class="form-group">
          <label>Major</label>
          <input type="text" name="education[${educationCount}][major]" />
        </div>
        <div class="form-group">
          <label>Minor</label>
          <input type="text" name="education[${educationCount}][minor]" />
        </div>
      </section>

      <section class="form-row">
        <div class="form-group">
          <label>Graduation Date</label>
          <input type="date" name="education[${educationCount}][graduationDate]" />
        </div>
        <div class="form-group">
          <label>GPA</label>
          <input type="number" step="0.01" name="education[${educationCount}][gpa]" />
        </div>
      </section>
      <section class="form-row">
        <div class="form-group">
          <label>Additional Information</label>
          <textarea name="education[${educationCount}][additional]"></textarea>
        </div>
      </section>
      `;
  container.appendChild(newSection);
  educationCount++;
}
