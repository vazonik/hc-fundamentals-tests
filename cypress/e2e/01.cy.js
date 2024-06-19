describe('template spec', () => {
    before('passes', () => {
        cy.visit('../../exercises/01-next-exercise/index.html');
    })

    it('test', () => {
        cy.window().its('Highcharts').then(Highcharts => {
            const chart = Highcharts.charts[0];

            assert.strictEqual(chart.series[0].type, 'column', 'The series is of the column type.');
        });
    });
});
