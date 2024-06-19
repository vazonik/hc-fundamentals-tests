describe('template spec', () => {
    before('passes', () => {
        cy.visit('../../exercises/00-create-chart/index.html');
    })

    it('test', () => {
        cy.window().its('Highcharts').then(Highcharts => {
            const chart = Highcharts.charts[0];

            assert.strictEqual(chart.series.length, 1, 'There is one series.');
            assert.strictEqual(chart.series[0].points.length, 3, 'There are 3 points in the series.');
            assert.deepEqual(chart.series[0].processedYData, [1, 2, 3]);
        });
    });
});
