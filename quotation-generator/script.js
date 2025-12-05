// Initialize form with current date
document.addEventListener('DOMContentLoaded', function () {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('quotationDate').value = today;

    // Add input listeners for real-time total calculation
    document.addEventListener('input', function (e) {
        if (e.target.classList.contains('particular-cost')) {
            calculateTotal();
        }
    });

    calculateTotal();
});

// Add new row to particulars table
function addRow() {
    const tbody = document.getElementById('particularsBody');
    const newRow = document.createElement('tr');
    newRow.className = 'particular-row';
    newRow.innerHTML = `
        <td><input type="text" class="particular-item" placeholder="Item description" required></td>
        <td><input type="number" class="particular-cost" placeholder="0" min="0" step="0.01" required></td>
        <td><input type="text" class="particular-remark" placeholder="Optional remarks"></td>
        <td><button type="button" class="btn-remove" onclick="removeRow(this)" title="Remove row">×</button></td>
    `;
    tbody.appendChild(newRow);

    // Add animation
    newRow.style.animation = 'fadeIn 0.3s ease-out';

    // Focus on the new row's first input
    newRow.querySelector('.particular-item').focus();

    calculateTotal();
}

// Remove row from particulars table
function removeRow(button) {
    const tbody = document.getElementById('particularsBody');
    const rows = tbody.getElementsByClassName('particular-row');

    // Keep at least one row
    if (rows.length > 1) {
        const row = button.closest('tr');
        row.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            row.remove();
            calculateTotal();
        }, 300);
    } else {
        alert('At least one row is required!');
    }
}

// Calculate total cost
function calculateTotal() {
    const costInputs = document.querySelectorAll('.particular-cost');
    let total = 0;

    costInputs.forEach(input => {
        const value = parseFloat(input.value) || 0;
        total += value;
    });

    document.getElementById('totalCost').textContent = `₹${total.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;

    return total;
}

// Generate preview
function generatePreview() {
    // Get form values
    const fromCompany = document.getElementById('fromCompany').value;
    const fromAddress = document.getElementById('fromAddress').value;
    const quotationNumber = document.getElementById('quotationNumber').value;
    const quotationDate = document.getElementById('quotationDate').value;
    const toName = document.getElementById('toName').value;
    const toAddress = document.getElementById('toAddress').value;
    const salutation = document.getElementById('salutation').value;
    const scopeOfWork = document.getElementById('scopeOfWork').value;
    const deliverables = document.getElementById('deliverables').value;
    const paymentTerms = document.getElementById('paymentTerms').value;
    const additionalNotes = document.getElementById('additionalNotes').value;

    // Validate required fields
    if (!fromCompany || !fromAddress || !quotationNumber || !quotationDate ||
        !toName || !toAddress || !scopeOfWork || !deliverables || !paymentTerms) {
        alert('Please fill in all required fields!');
        return;
    }

    // Get particulars data
    const rows = document.querySelectorAll('.particular-row');
    let particularsHTML = '';
    let hasValidParticulars = false;

    rows.forEach(row => {
        const item = row.querySelector('.particular-item').value;
        const cost = row.querySelector('.particular-cost').value;
        const remark = row.querySelector('.particular-remark').value;

        if (item && cost) {
            hasValidParticulars = true;
            const costValue = parseFloat(cost);
            particularsHTML += `
                <tr>
                    <td>${escapeHtml(item)}</td>
                    <td class="cost-cell">₹${costValue.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</td>
                    <td>${escapeHtml(remark)}</td>
                </tr>
            `;
        }
    });

    if (!hasValidParticulars) {
        alert('Please add at least one valid particular item!');
        return;
    }

    const total = calculateTotal();
    const formattedDate = formatDate(quotationDate);

    // Generate quotation HTML with letterhead
    const quotationHTML = `
        <div class="quotation-content">
            <!-- Letterhead Header -->
            <div class="letterhead-header">
                <div class="letterhead-decorative-top"></div>
                
                <div class="letterhead-logo">
                    <div class="letterhead-logo-text">SHAI<br>LOG</div>
                </div>
                
                <div class="quotation-header-with-letterhead">
                    <div class="company-name">${escapeHtml(fromCompany)}</div>
                    <div class="company-address">${escapeHtml(fromAddress).replace(/\n/g, '<br>')}</div>
                </div>
            </div>
            
            <div class="quotation-meta">
                <div class="meta-item">
                    <div class="meta-label">Quotation No.</div>
                    <div class="meta-value">${escapeHtml(quotationNumber)}</div>
                </div>
                <div class="meta-item">
                    <div class="meta-label">Date</div>
                    <div class="meta-value">${formattedDate}</div>
                </div>
            </div>
            
            <div class="quotation-to">
                <div class="to-label">To</div>
                <div class="to-name">${escapeHtml(toName)}</div>
                <div class="to-address">${escapeHtml(toAddress).replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="salutation">${escapeHtml(salutation)},</div>
            
            <div class="quotation-section">
                <h3>1. Scope of Work</h3>
                <p>${escapeHtml(scopeOfWork)}</p>
            </div>
            
            <div class="quotation-section">
                <h3>2. Deliverables</h3>
                <p>${escapeHtml(deliverables)}</p>
            </div>
            
            <div class="quotation-section">
                <h3>3. Particulars</h3>
                <table class="particulars-table">
                    <thead>
                        <tr>
                            <th>Particulars</th>
                            <th style="text-align: right;">Cost (INR)</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${particularsHTML}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td class="cost-cell total-amount"><strong>₹${total.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}</strong></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            
            <div class="quotation-section">
                <h3>4. Payment Terms</h3>
                <p>${escapeHtml(paymentTerms)}</p>
            </div>
            
            ${additionalNotes ? `
            <div class="quotation-section">
                <h3>Additional Notes</h3>
                <p>${escapeHtml(additionalNotes)}</p>
            </div>
            ` : ''}
            
            <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 0.9rem; text-align: center;">
                    This quotation is valid for 30 days from the date of issue.
                </p>
            </div>
            
            <!-- Letterhead Footer -->
            <div class="letterhead-decorative-bottom"></div>
        </div>
    `;


    // Update preview
    const previewElement = document.getElementById('quotationPreview');
    previewElement.innerHTML = quotationHTML;

    // Smooth scroll to preview on mobile
    if (window.innerWidth <= 1200) {
        previewElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Show success message
    showNotification('Preview generated successfully!', 'success');
}

// Print quotation
function printQuotation() {
    const previewContent = document.getElementById('quotationPreview').innerHTML;

    if (previewContent.includes('preview-placeholder')) {
        alert('Please generate a preview first before printing!');
        return;
    }

    // Copy content to print area
    document.getElementById('printContent').innerHTML = previewContent;

    // Trigger print
    window.print();
}

// Reset form
function resetForm() {
    if (confirm('Are you sure you want to reset the form? All data will be lost.')) {
        document.getElementById('quotationForm').reset();

        // Reset to single row
        const tbody = document.getElementById('particularsBody');
        tbody.innerHTML = `
            <tr class="particular-row">
                <td><input type="text" class="particular-item" placeholder="Item description" required></td>
                <td><input type="number" class="particular-cost" placeholder="0" min="0" step="0.01" required></td>
                <td><input type="text" class="particular-remark" placeholder="Optional remarks"></td>
                <td><button type="button" class="btn-remove" onclick="removeRow(this)" title="Remove row">×</button></td>
            </tr>
        `;

        // Reset preview
        document.getElementById('quotationPreview').innerHTML = `
            <div class="preview-placeholder">
                <div class="placeholder-icon">👁️</div>
                <h3>Preview Your Quotation</h3>
                <p>Fill out the form on the left and click "Generate Preview" to see your quotation here.</p>
            </div>
        `;

        // Reset date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('quotationDate').value = today;

        calculateTotal();
        showNotification('Form reset successfully!', 'info');
    }
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Auto-save to localStorage (optional feature)
let autoSaveTimeout;
document.addEventListener('input', function (e) {
    if (e.target.closest('#quotationForm')) {
        clearTimeout(autoSaveTimeout);
        autoSaveTimeout = setTimeout(saveFormData, 1000);
    }
});

function saveFormData() {
    const formData = {
        fromCompany: document.getElementById('fromCompany').value,
        fromAddress: document.getElementById('fromAddress').value,
        quotationNumber: document.getElementById('quotationNumber').value,
        quotationDate: document.getElementById('quotationDate').value,
        toName: document.getElementById('toName').value,
        toAddress: document.getElementById('toAddress').value,
        salutation: document.getElementById('salutation').value,
        scopeOfWork: document.getElementById('scopeOfWork').value,
        deliverables: document.getElementById('deliverables').value,
        paymentTerms: document.getElementById('paymentTerms').value,
        additionalNotes: document.getElementById('additionalNotes').value
    };

    localStorage.setItem('quotationDraft', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem('quotationDraft');
    if (savedData) {
        const formData = JSON.parse(savedData);
        Object.keys(formData).forEach(key => {
            const element = document.getElementById(key);
            if (element && formData[key]) {
                element.value = formData[key];
            }
        });
    }
}

// Load saved data on page load
window.addEventListener('load', loadFormData);
