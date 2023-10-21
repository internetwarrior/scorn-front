const testJSON = {
  balance: {
    balance_res: {
      first_date: {
        date: "2023-10-09",
        active: {
          working_capital: 0,
          main_capital: 0,
        },
        passive: {
          borrowed_capital: 0,
          own_capital: {
            start_capital: 0,
            own_capital_profit: 0,
          },
        },
      },
      second_date: {
        date: "2023-10-09",
        active: {
          working_capital: 0,
          main_capital: 0,
        },
        passive: {
          borrowed_capital: 0,
          own_capital: {
            start_capital: 0,
            own_capital_profit: 0,
          },
        },
      },
    },
    liquid_coefficient: "абс",
    percent_of_own_capital: 0.0,
    ratio_between_own_capital_and_amount_credit: 0.0,
    ratio_borrowed_capital: 0.0,
  },
  OPiU: {
    period: [
      {
        Naming: "2023-10-09",
        revenue: 0.0,
        cost_price: 0.0,
        gross_profit: 0.0,
        overheads: 0.0,
        business_profit: 0.0,
        family_expenses: 0.0,
        additional_income: 0.0,
        pure_profit: 0.0,
        loan_installment: 0.0,
        balance_amount: 0.0,
        pillow: 0.0,
      },
    ],
    mean: {
      Naming: "Mean Value",
      revenue: 0.0,
      cost_price: 0.0,
      gross_profit: 0.0,
      overheads: 0.0,
      business_profit: 0.0,
      family_expenses: 0.0,
      additional_income: 0.0,
      pure_profit: 0.0,
      loan_installment: 0.0,
      balance_amount: 0.0,
      pillow: 0.0,
    },
    full: {
      Naming: "Full Amount",
      revenue: 0.0,
      cost_price: 0.0,
      gross_profit: 0.0,
      overheads: 0.0,
      business_profit: 0.0,
      family_expenses: 0.0,
      additional_income: 0.0,
      pure_profit: 0.0,
      loan_installment: 0.0,
      balance_amount: 0.0,
      pillow: 0.0,
    },
  },
  quality_indicators: {
    business_term: {
      point: 2,
      weight_ind: 5,
      total_points: 10,
    },
    having_patent_term: {
      point: 2,
      weight_ind: 5,
      total_points: 10,
    },
    debt_to_budget: {
      point: 0,
      weight_ind: 5,
      total_points: 0,
    },
    credit_line_spouse: {
      point: 3,
      weight_ind: 30,
      total_points: 90,
    },
    commercial_property: {
      point: 0,
      weight_ind: 5,
      total_points: 0,
    },
    own_property: {
      point: 2,
      weight_ind: 5,
      total_points: 10,
    },
  },
  financial_data: {
    pillow: {
      point: 0,
      weight_ind: 15,
      total_points: 0,
    },
    liquid: {
      point: 0,
      weight_ind: 5,
      total_points: 0,
    },
    equity_share: {
      point: 0,
      weight_ind: 15,
      total_points: 0,
    },
    capital_ratio: {
      point: 0,
      weight_ind: 5,
      total_points: 0,
    },
    share_of_borrowed_capital: {
      point: 2,
      weight_ind: 5,
      total_points: 10,
    },
  },
  result: {
    points: 130,
    status: "Под угрозой",
    rating: "B2",
  },
};

export default testJSON;
