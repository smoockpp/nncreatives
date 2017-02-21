'use strict';

let contactAnchor = $('a[href="#contact"]');

function createForm() {
  let contactHTML = ``;
  contactHTML += `
  <div class="modal fade" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="contact-modal-label">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="contact-modal-label">Contact me</h4>
        </div>
        <div class="modal-body">
          <form id="contact-form" action="https://formspree.io/nikolay.nikolov@n-nikolov.com"  method="post">
            <div class="form-group">
              <label for="visitor-name" class="control-label">Your name:</label>
              <input type="text" class="form-control" id="visitor-name" name="visitor-name" required>
            </div>
            <div class="form-group">
              <label for="visitor-email" class="control-label">Your email:</label>
              <input type="email" class="form-control" id="visitor-email" name="visitor-email" required>
            </div>
            <div class="form-group">
              <label for="visitor-phone" class="control-label">Your phone number (optional):</label>
              <input type="phone" class="form-control" id="visitor-phone" name="visitor-phone">
            </div>
            <div class="form-group">
              <label for="message-text" class="control-label">Message:</label>
              <textarea class="form-control" id="message-text" rows="10" name="message-text" required></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          <button type="submit" form="contact-form" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  </div>
  `;
  return contactHTML;
}


contactAnchor.click(function() {
  $('body').append(createForm);
  $('#contact-modal').modal('toggle');
});
